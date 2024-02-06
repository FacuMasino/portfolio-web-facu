export const sendEmail = async (data: string): Promise<boolean> => {
  const endpoint = '/api/send';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json',
    },
    body: data,
  };

  const res = await fetch(endpoint, options);
  return res.status === 200 ? true : false;
};

export const disabledElements = (
  elArr: HTMLFormControlsCollection,
  disable: boolean
) => {
  Array.prototype.forEach.call(elArr, (element: HTMLFormElement) => {
    element.disabled = disable;
  });
};
