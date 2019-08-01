import axios from 'axios';
import { Request } from '../../../types';

export const request: Request = () => axios.get('https://www.naver.com/');
