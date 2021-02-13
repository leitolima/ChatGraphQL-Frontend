export const createInviteMessage = id => {
const message = `
¡Look at this new chat's app!
Registed at:
http://localhost:3000
Then, enter to my channel in:
http://localhost:3000/channel/${id}`;
return message;
}