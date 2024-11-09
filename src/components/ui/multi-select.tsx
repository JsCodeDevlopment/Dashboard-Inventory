import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Check, X } from "lucide-react";
import * as React from "react";

export type MultiSelectOptionsType = Record<"value" | "label", string>;

interface MultiSelectInputProps {
  options: MultiSelectOptionsType[];
  value: MultiSelectOptionsType[];
  onChange: (selected: MultiSelectOptionsType[]) => void;
  placeholder?: string;
}

export function MultiSelectInput({
  options,
  value,
  onChange,
  placeholder,
}: MultiSelectInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback(
    (option: MultiSelectOptionsType) => {
      onChange(value.filter((s) => s.value !== option.value));
    },
    [value, onChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            onChange(value.slice(0, -1));
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [value, onChange]
  );

  const selectables = options.filter((option) => !value.includes(option));

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="h-auto w-fit min-w-48 overflow-visible bg-transparent"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {value.map((option, i) => {
            return (
              <Badge key={i} variant="default">
                {option.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-background hover:text-destructive" />
                </button>
              </Badge>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder ?? "Select an option..."}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((option, i) => {
                  const isSelected = value.some(
                    (val) => val.value === option.value
                  );
                  return (
                    <CommandItem
                      key={i}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => {
                        setInputValue("");
                        onChange([...value, option]);
                      }}
                      className={"cursor-pointer"}
                    >
                      {option.label}
                      {isSelected && (
                        <Check className="ml-2 h-4 w-4 text-green-500" />
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
