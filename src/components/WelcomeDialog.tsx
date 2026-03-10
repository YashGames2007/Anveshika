import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTheme } from "@/theme/ThemeContext";

type WelcomeDialogContextValue = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const WelcomeDialogContext = createContext<WelcomeDialogContextValue | undefined>(undefined);

export const WelcomeDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <WelcomeDialogContext.Provider
      value={{
        open,
        openDialog: () => setOpen(true),
        closeDialog: () => setOpen(false),
      }}
    >
      {children}
      <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
        <DialogContent className="max-w-md overflow-hidden border-primary/30 bg-card shadow-2xl sm:rounded-2xl p-0 gap-0">
          <div className="relative bg-gradient-to-b from-card to-muted/30 pt-8 pb-8 px-6 text-center">
            <div className="mx-auto mb-6 w-36 h-36 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-primary/40 shadow-lg">
              <img
                src={isDark ? "/logo-dark.jpeg" : "/logo-light.jpeg"}
                alt="Anveshika"
                className="w-[90%] h-[90%] object-cover rounded-full"
              />
            </div>
            <p className="sanskrit-text text-primary/80 text-sm mb-2">
              अन्वेषिका — जिज्ञासा, अन्वेषण, अभियान
            </p>
            <DialogTitle className="font-display text-2xl md:text-3xl font-bold gradient-text">
              Welcome to Anveshika
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-sm md:text-base font-display">
              Where ancient wisdom meets modern innovation.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </WelcomeDialogContext.Provider>
  );
};

export const useWelcomeDialog = () => {
  const ctx = useContext(WelcomeDialogContext);
  if (!ctx) throw new Error("useWelcomeDialog must be used within WelcomeDialogProvider");
  return ctx;
};
