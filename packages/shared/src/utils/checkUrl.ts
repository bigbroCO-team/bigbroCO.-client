/**
 * '/auth/login', '/auth/signup', '/product/', '/product/숫자' 해당 형식의 문자열이 맞는지 확인하는 함수입니다
 *
 * @returns boolean
 */

const checkUrl = (url: string) => {
  const notUseTokenUrlRegex = /^\/auth\/(login|signup)$|^\/product\/(\d+)?$/;

  return notUseTokenUrlRegex.test(url);
};

export default checkUrl;
