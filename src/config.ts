import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет, Даша!",
		invitation: "Пойдешь со мной на свидание вечером? 👉👈🥺",
		yesText: "Конечно ❤️",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: 'Ответ Нет не принимается 😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Увидимся в Супре Романи в 22:00 😊",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
