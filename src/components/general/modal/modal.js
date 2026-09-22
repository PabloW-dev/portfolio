

export const modalData = {
    contact: () => ({
        title: "Contact",
        text: "Thank you very much for making it this far. If, after seeing my work, you feel your time was well spent, I'll know I've done my job well. Have a great day.",
        email: "pablowfusterpastor@gmail.com",
        buttons: [
            {
                id: "email",
                text: "Email me",
                action: "send"
            },
            {
                id: "linkedin",
                action: "enter",
                url: "https://www.linkedin.com/in/pablo-w-fuster-pastor-31a037401/"
            },
            {
                id: "github",
                action: "enter",
                url: "https://github.com/PabloW-dev"
            },
        ]
    }),

    sitemap: () => ({
        title: "Interactive Navigation Map",
    })
}

export function closeModal(setModal, modal = null) {
    modal?.payload?.onClose?.();

    setModal({
        open: false,
        type: null,
        payload: null
    });
}  


export function openModal(setModal, modal) {

  setModal({
    payload: null,
    ...modal
  });
}