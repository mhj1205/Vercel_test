export const getUserInfo = async () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const path = '/v1/oauth/user/info';

  try {
    const response = await fetch(`${API_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error('Bad server condition');
    }

    // 서버에서 받은 유저 정보 출력
    const data = await response.json();

    // 유저 정보가 있으면 터미널에 출력
    if (data) {
      console.log('User Info:', data);
    } else {
      console.log('No user info received.');
    }

    return data;

  } catch (e) {
    console.error('getUserInfo Error: ', e.message);
    return false;
  }
};
