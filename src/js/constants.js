import * as configcat from "configcat-js";

const defines = {
				LASER: {
								WIDTH: 3,
								HEIGHT: 28
				}
};

let flag;
const sdkKey = '1K3ZCCa1S0GKW6RN4S5wyA/o33xY-5E_U-aEzyeTlme_g';
const client = configcat.createClient(sdkKey);
const getFlag = () => flag; 

client.getValue("isMyFirstFeatureEnabled", false, value => {
				console.log("isMyFirstFeatureEnabled: " + value);
				flag = value;
});

export { defines, getFlag };