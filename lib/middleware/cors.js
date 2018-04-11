import cors from 'cors';

const corsWhitelist = ['http://localhost:8000', 'http://0.0.0.0:8000'];
const corsOptions = {
  origin(origin, callback) {
    if (corsWhitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Cross-Origin Request Blocked').message);
    }
  },
};

export default cors(corsOptions);
