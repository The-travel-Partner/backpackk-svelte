export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/contactus": [4],
		"/forgotpassword": [5],
		"/intermediate": [6],
		"/itinerary": [7],
		"/itinerary/intermediate": [8],
		"/login": [9],
		"/parameters/cityname": [10],
		"/parameters/dates": [11],
		"/parameters/types": [12],
		"/profile": [13],
		"/report": [14],
		"/resetpassword": [15],
		"/signup": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';