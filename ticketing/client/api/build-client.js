import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    console.log(req.headers);
    return axios.create({
      //   baseURL:
      //     'https://ingress-nginx-controller-admission.ingress-nginx.svc.cluster.local',
      baseURL: 'http://auth-srv.kyh.svc.cluster.local:3000',
      headers: req.headers,
    });
  } else {
    // we must be on the browser
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
