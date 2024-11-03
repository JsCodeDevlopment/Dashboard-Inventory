import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog-ui';

interface DialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

/**
 * @example
 *
 * ```tsx
 * <Dialog
 *   trigger={<button>Open Dialog</button>}
 *   title="Dialog Title"
 *   description="This is a description of the dialog." //this is optional
 *   open={isOpen} //this is optional
 *   onOpenChange={setIsOpen} //this is optional
 * >
 *   <p>This is the content of the dialog.</p>
 * </Dialog>
 * ```
 */

export const Dialog = ({
  trigger,
  children,
  title,
  description,
  onOpenChange,
  open,
  className,
}: DialogProps) => {
  return (
    <DialogComponent onOpenChange={onOpenChange} open={open}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </DialogComponent>
  );
};
