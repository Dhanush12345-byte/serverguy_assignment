// MyContext.js
import { createContext } from 'react';

const MyContext = createContext({
    username: '',
    setUsername: () => {}
});

export default MyContext;