import axios from "axios";
import { autoLogout } from "./logout";

export async function getPaginate(url, page, auth = true) {
  const config = null;
  if (auth) {
    config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    };
  }
  const res = axios
    .get(url + "?page=" + page, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}

export async function show(url) {
  const res = axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}

export async function get(url, id) {
  const res = axios
    .get(url + "/" + id, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}

export async function post(url, value, auth = true) {
  const res = await axios
    .post(url, JSON.stringify(value), {
      headers: {
        "Content-Type": "application/json;",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}

export async function put(url, id, value) {
  const res = axios
    .put(url + `/${id}`, JSON.stringify(value), {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}

export async function del(url, id) {
  const res = axios
    .delete(url + `/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("loginSession")).accessToken
        }`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        autoLogout();
      } else {
        return error.response;
      }
    });

  return res;
}
