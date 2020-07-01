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
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_gstin",
				"type": "string"
			}
		],
		"name": "serchbygst",
		"outputs": [
			{
				"components": [
					{
						"name": "billno",
						"type": "int256"
					},
					{
						"name": "gstno",
						"type": "string"
					},
					{
						"name": "aadhar",
						"type": "string"
					},
					{
						"name": "phnno",
						"type": "string"
					},
					{
						"name": "billamnt",
						"type": "int256"
					},
					{
						"name": "gstamnt",
						"type": "int256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0xc3A439184C3F9c6AE4bD5FF9226d64A2A469c5D2";
