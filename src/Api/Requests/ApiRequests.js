import { ConstantField } from "../../Utils/ConstantField";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PostApi = (endpoint, data) => {
	let data2 = { ...data, lang: ConstantField.ARABIC ? "ar" : "en" };

	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data2),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PostApi_1 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "POST",
			body: data,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PostApi_2 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: data,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PostApi_3 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PostApi_4 = (endpoint, formData) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const STEPS_ADD_API = (endpoint, formData) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + "addSteps", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const STEPS_POST_API = async (number, orderid) => {
	let parsed = JSON.parse(await AsyncStorage.getItem("LoginData"));
	const formData = new FormData();
	formData.append("token", parsed.token);
	formData.append("step_number", number);
	formData.append("order_id", orderid);

	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + "getSteps", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PutApi_1 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "PUT",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const PutApi_2 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "PUT",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: data,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const DeleteApi_1 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const DeleteApi_2 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: data,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const GetApi = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const GetApi_1 = (endpoint, data) => {
	return new Promise((resolve, reject) => {
		fetch(ConstantField.BASEURL + endpoint, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: data,
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
