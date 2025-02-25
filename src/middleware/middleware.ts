export const authMiddleware = async(req: any,res: any,next: any) => {
    const authHeader = req.headers.autorization
    if(!authHeader){
        return res.status(404).json({message: "No"})
    }
    next()
}