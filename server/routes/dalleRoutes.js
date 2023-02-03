import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration } from 'openai';

dotenv.config();

const router = express.Router();