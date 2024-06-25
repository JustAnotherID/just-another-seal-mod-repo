type creature =
  | @as("mosquito") Mosquito
  | @as("cockroach") Cockroach

type action =
  | @as("拍") Beat
  | @as("踩") StepOn

type achievement =
  | @as("mosquito10Kill") Mosquito10Kill
  | @as("mosquito100Kill") Mosquito100Kill
  | @as("mosquito1000Kill") Mosquito1000Kill
  | @as("mosquito10000Kill") Mosquito10000Kill
  | @as("cockroach10Kill") Cockroach10Kill
  | @as("cockroach100Kill") Cockroach100Kill
  | @as("cockroach1000Kill") Cockroach1000Kill
  | @as("cockroach10000Kill") Cockroach10000Kill

  | @as("mosquito10Release") Mosquito10Release
  | @as("mosquito100Release") Mosquito100Release
  | @as("mosquito1000Release") Mosquito1000Release
  | @as("mosquito10000Release") Mosquito10000Release
  | @as("cockroach10Release") Cockroach10Release
  | @as("cockroach100Release") Cockroach100Release
  | @as("cockroach1000Release") Cockroach1000Release
  | @as("cockroach10000Release") Cockroach10000Release

type equipment = | @as("electricSwatter") ElectricSwatter

type consumable =
  | @as("mosquitoRepellentIncense") MosquitoRepellentIncense
  | @as("cockroachTrap") CockroachTrap
  | @as("cockroachGelBait") CockroachGelBait

type item =
  | ...equipment
  | ...consumable

type playerInfo = {
}

type groupInfo = {
}
