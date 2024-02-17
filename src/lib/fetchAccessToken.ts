import { cookies } from "next/headers";

export async function fetchAccessToken(code?: string): Promise<string | null> {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}-rt`
  )?.value;

  console.log(refreshToken,code);

  if (!refreshToken) {
    return null;
  }

  if (!process.env.FAUSTWP_SECRET_KEY) {
    throw new Error("FAUST_SECRET_KEY must be set");
  }

  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/?rest_route=/faustwp/v1/authorize`;

  let response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-faustwp-secret": process.env.FAUSTWP_SECRET_KEY!,
    },
    method: "POST",
    body: JSON.stringify({
      code,
      // refreshToken: refreshToken,
    }),
  });

  console.log(response);

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  // cookieStore.set(
  //   `${process.env.NEXT_PUBLIC_WORDPRESS_URL}-rt`,
  //   result.refreshToken
  // );


  //example
//   const CREATE_LOGIN_MUTATION = gql`
//     generateAuthorizationCode(
//       input: { username: $username, password: $password }
//     ) {
//       clientMutationId
//       code
//       error
//     }
//   }
// `;
// const response = await client.mutate({
//   mutation: CREATE_LOGIN_MUTATION,
//   variables: {
//     username: 'Cansoft',
//     password: '4hFFLGY$JPHzdelHf1T(0X)6',
//   },
// });
// const accessToken = await fetchAccessToken(response.data.generateAuthorizationCode.code);

  return result.accessToken;
}
