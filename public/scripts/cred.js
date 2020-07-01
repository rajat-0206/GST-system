var ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_billno",
				"type": "int256"
			},
			{
				"name": "_gstno",
				"type": "string"
			},
			{
				"name": "_aadhar",
				"type": "string"
			},
			{
				"name": "_phoneno",
				"type": "string"
			},
			{
				"name": "_billamnt",
				"type": "int256"
			},
			{
				"name": "_gstamnt",
				"type": "int256"
			}
		],
		"name": "addbilldetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_accno",
				"type": "string"
			},
			{
				"name": "_gstin",
				"type": "string"
			},
			{
				"name": "_businessname",
				"type": "string"
			},
			{
				"name": "_aadharno",
				"type": "string"
			},
			{
				"name": "_phoneno",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_accbal",
				"type": "int256"
			}
		],
		"name": "addBusiness",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_amount",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_gstin",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "businessLogin",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_gstin",
				"type": "string"
			}
		],
		"name": "getBusinessDetails",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gstbilldetails",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_billno",
				"type": "int256"
			}
		],
		"name": "searchBill",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var address = "0x53Fe3BeDB8f2Ed7d6e59D9F2223C9e2881aE2B4a";