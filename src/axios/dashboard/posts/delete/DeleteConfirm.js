const options = {
  title: "Title",
  message: "Message",
  buttons: [
    {
      label: "Yes",
      onClick: () => alert("Click Yes"),
    },
    {
      label: "No",
      onClick: () => alert("Click No"),
    },
  ],
  closeOnEscape: true,
  closeOnClickOutside: true,
  keyCodeForClose: [8, 32],
  willUnmount: () => {},
  afterClose: () => {},
  onClickOutside: () => {},
  onKeypress: () => {},
  onKeypressEscape: () => {},
  overlayClassName: "overlay-custom-class-name",
};

confirmAlert(options);
