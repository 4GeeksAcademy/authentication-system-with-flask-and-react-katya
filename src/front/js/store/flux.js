const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: [],
    },
    actions: {
      login: () => async (email, password) => {
        const resp = await fetch(
          `https://special-journey-5gq9ppq7vxgw3vg9v-3001.app.github.dev/api/token`,
          {
			mode: 'no-cors',
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );

        if (!resp.ok) throw Error("There was a problem in the login request");

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
        const data = await resp.json();

        localStorage.setItem("jwt-token", data.token);

        return data;
      },

      signup: (email, password) => {
        fetch(
          `https://special-journey-5gq9ppq7vxgw3vg9v-3001.app.github.dev/api/signup`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then((data) => {
            setStore({ user: data });
          })
          .catch((error) => {
            console.log(error);
          });

		alert("User created successfully")
      },
    },
  };
};

export default getState;
