import { NextApiResponse } from 'next';

type MetaData = {
  page?: number;
  limit?: number;
  total?: number;
};

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: MetaData;
  data?: T | null;
};

const sendResponse = <T>(res: NextApiResponse, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data?.statusCode,
    success: data?.success,
    message: data?.message || null,
    meta: data?.meta || undefined, 
    data: data?.data || null,
  };

  res.status(data?.statusCode).json(responseData);
};

export default sendResponse;
