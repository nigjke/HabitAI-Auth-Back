export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const user: User = await AuthService.login(req.body);
    const { accesToken, refreshToken } = Token;
  } catch {}
};
