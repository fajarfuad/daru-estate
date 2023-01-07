import React, { useEffect } from "react";

import { Row, Col, Form, Input, Button, Checkbox } from "antd";

import RightContent from "../rightContent";

import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

import { API_URL } from "../../../../api/config";

import axios from "axios";

export default function Login() {
  const history = useHistory();

  const onFinish = async (values) => {
    const res = await axios
      .post(API_URL.login, JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json;",
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response;
      });

    if (res.status == 200) {
      Swal.fire({
        title: "Berhasil!",
        text: "Login Berhasil",
        icon: "success",
      });

      const storage = {
        email: res.data.user.email,
        name: res.data.user.name,
        accessToken: res.data.authorisation.token,
      };

      localStorage.setItem("loginSession", JSON.stringify(storage));

      setTimeout(() => {
        history.push("/");
      }, 1000);
    } else if (res.status == 401) {
      Swal.fire({
        title: "Gagal!",
        text: "Login Gagal, Pastikan email dan password Anda benar",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Login Gagal, Error " + res.status,
        icon: "error",
      });
    }
  };

  const checkSession = () => {
    const storage = localStorage.getItem("loginSession");
    const date = new Date();

    if (storage !== null) {
      const data = JSON.parse(storage);
      const token = data.accessToken;
      if (token !== null) {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Row gutter={[32, 0]} className="daru-authentication-page">
      <Col lg={12} span={24} className="daru-py-sm-0 daru-py-md-64">
        <Row className="daru-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="daru-px-sm-8 daru-pt-24 daru-pb-48"
          >
            <h1 className="daru-mb-sm-0">Masuk</h1>
            <p className="daru-mt-sm-0 daru-mt-8 daru-text-color-black-60">
              Selamat datang kembali, silahkan login ke akun Anda.
            </p>

            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className="daru-mt-sm-16 daru-mt-32"
            >
              <Form.Item
                label="Email :"
                className="daru-mb-16"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Masukkan email Anda!",
                  },
                ]}
              >
                <Input autoComplete="username" />
              </Form.Item>

              <Form.Item
                label="Password :"
                className="daru-mb-8"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Masukkan password Anda!",
                  },
                ]}
              >
                <Input.Password autoComplete="current-password" />
              </Form.Item>

              <Row align="middle" justify="space-between">
                <Form.Item className="daru-mb-0">
                  <Checkbox name="remember">Simpan Password</Checkbox>
                </Form.Item>
                {/* 
                <Link
                  className="daru-button daru-text-color-black-80 daru-text-color-dark-40"
                  to=""
                >
                  Lupa Password?
                </Link> */}
              </Row>

              <Form.Item className="daru-mt-16 daru-mb-8">
                <Button block type="primary" htmlType="submit">
                  Masuk
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
      <RightContent />
    </Row>
  );
}
