import { ImageLoaderProps } from "next/image";

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

export const clearForm = (elArr: HTMLFormControlsCollection) => {
  Array.prototype.forEach.call(elArr, (element: HTMLFormElement) => {
    if (element.tagName != 'BUTTON') {
      element.value = '';
    }
  });
};

export const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/facumasino/portfolio-facu";
  if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}