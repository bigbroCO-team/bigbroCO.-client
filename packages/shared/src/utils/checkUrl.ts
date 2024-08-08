/**
 * '/auth/login', '/auth/signup', '/product + 아무 문자', 해당 형식의 문자열이 맞는지 확인하는 함수입니다
 *
 * @returns boolean
 */

const checkUrl = (url: string) => {
  const notUseTokenUrlRegex = /^\/auth\/(login|signup)$|^\/product.*$/;

  return notUseTokenUrlRegex.test(url);
};

export default checkUrl;
