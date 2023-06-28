export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if(success) {
      resolve({status:200, body:'sucess',})
    }
    reject(throw new Error('The fake API is not working currently') )
  });
} 
