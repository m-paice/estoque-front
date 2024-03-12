import { CSSProperties, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  size?: "small" | "medium" | "large";
  closeModal: () => void;
}

const sizes = {
  small: "450px",
  medium: "700px",
  large: "1100px",
};

export function Modal({
  size = "large",
  title,
  children,
  isOpen,
  closeModal,
}: Props) {
  if (!isOpen) return null;

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div />
          </Transition.Child>

          <div style={styles.container}>
            <div style={{ ...styles.modal, width: sizes[size] }}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <Dialog.Title
                    style={{ textAlign: "center", fontSize: 24 }}
                    as="h3"
                  >
                    {title}
                  </Dialog.Title>
                  <div
                    style={{
                      minHeight: 200,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
};
