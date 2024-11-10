import mongoose from "mongoose";
import user from "../schema/user.js";
export const findUserByEmail=async (email)=>{
    try{
        const User=await user.findOne({email});
        return User;
    }catch(error){
        console.error(error);
        
    }
}

export const findAllUser=async ()=>{
    try{
        const User=await user.find({});
        return User;
    }catch(error){
        console.error(error);
    }
}