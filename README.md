# blocksaver

token contract address:

- 0x6D74c4551029018A91385a8db10E71E291F1167B

crowdsale contract addres:

- 0xf4381b441B7bF150B76490a9A278290d6F0b0174

<img src='./Transport_Design.jpeg'>

<h1> Crowdsale ABI </h1>

```
[
	{
		"constant": false,
		"inputs": [],
		"name": "checkGoalReached",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "coords",
				"type": "bytes32"
			},
			{
				"name": "_message",
				"type": "bytes32"
			}
		],
		"name": "checkIn",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "safeWithdrawal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "ifSuccessfulSendTo",
				"type": "address"
			},
			{
				"name": "fundingGoalInEthers",
				"type": "uint256"
			},
			{
				"name": "durationInMinutes",
				"type": "uint256"
			},
			{
				"name": "etherCostOfEachToken",
				"type": "uint256"
			},
			{
				"name": "addressOfTokenUsedAsReward",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "totalAmountRaised",
				"type": "uint256"
			}
		],
		"name": "GoalReached",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_location",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_message",
				"type": "bytes32"
			}
		],
		"name": "SendReport",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "_locations",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "amountRaised",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "deadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fundingGoal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenEmission",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenReward",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
```

<h1> Crowdsale ByteCode </h1>

```
 60806040526000600860006101000a81548160ff0219169083151502179055506000600860016101000a81548160ff02191690831515021790555034801561004657600080fd5b5060405160a080610b4b8339810180604052810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550670de0b6b3a76400008402600181905550603c83024201600381905550670de0b6b3a7640000820260048190555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550670de0b6b3a764000060098190555050505050506109e8806101636000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301cb3b201461021c5780631d765d891461023357806329dcb0cf1461027857806338af3eed146102a35780633e4273c2146102fa5780636e66f6e91461033957806370a082311461039057806374912463146103e75780637a3a0e84146104125780637b3e5e7b1461043d578063a035b1fe14610468578063fd6b7ef814610493575b6000600860019054906101000a900460ff161515156100d857600080fd5b600954905080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600260008282540192505081905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336009546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561020157600080fd5b505af1158015610215573d6000803e3d6000fd5b5050505050005b34801561022857600080fd5b506102316104aa565b005b34801561023f57600080fd5b50610262600480360381019080803560001916906020019092919050505061058a565b6040518082815260200191505060405180910390f35b34801561028457600080fd5b5061028d6105a2565b6040518082815260200191505060405180910390f35b3480156102af57600080fd5b506102b86105a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561030657600080fd5b50610337600480360381019080803560001916906020019092919080356000191690602001909291905050506105cd565b005b34801561034557600080fd5b5061034e61075e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039c57600080fd5b506103d1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610784565b6040518082815260200191505060405180910390f35b3480156103f357600080fd5b506103fc61079c565b6040518082815260200191505060405180910390f35b34801561041e57600080fd5b506104276107a2565b6040518082815260200191505060405180910390f35b34801561044957600080fd5b506104526107a8565b6040518082815260200191505060405180910390f35b34801561047457600080fd5b5061047d6107ae565b6040518082815260200191505060405180910390f35b34801561049f57600080fd5b506104a86107b4565b005b600354421015156105885760015460025410151561056c576001600860006101000a81548160ff0219169083151502179055507fec3f991caf7857d61663fd1bba1739e04abd4781238508cde554bb849d790c856000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b6001600860016101000a81548160ff0219169083151502179055505b565b60076020528060005260406000206000915090505481565b60035481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336009546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561069457600080fd5b505af11580156106a8573d6000803e3d6000fd5b50505050600954600760008460001916600019168152602001908152602001600020600082825401925050819055507f502762eb341500d51614e5803a6b7b5f1b6193c5f5cb6161eeadb32571e8993d338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183600019166000191681526020018260001916600019168152602001935050505060405180910390a15050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915090505481565b60095481565b60015481565b60025481565b60045481565b6000600354421015156109b957600860009054906101000a900460ff1615156108ed57600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008111156108ec573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050156108a6576108eb565b80600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b5b600860009054906101000a900460ff16801561095557503373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156109b8573373ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f193505050501561099b576109b7565b6000600860006101000a81548160ff0219169083151502179055505b5b5b505600a165627a7a72305820dcc8b94ee8f9ecba3bd943fb5d576191ef26a1f1105101f9dc08de01ec77e07c0029

```

<h1> Token ABI </h1>

```
[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "initialSupply",
        "type": "uint256"
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
```
