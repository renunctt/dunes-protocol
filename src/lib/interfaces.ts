export interface ICard {
	title: string
	img: string
	icon: string
	price: string
	percent: string
	social: {
		icon: string
		link: string
		alt: string
	}[]
}

export interface ICardUpcoming {
	title: string
	img: string
	icon: string
}
