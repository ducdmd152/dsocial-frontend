const avatarLinkList = {
  male: [
    "https://i.pinimg.com/originals/af/d1/a3/afd1a3201f501c4edd8d1543051e5063.jpg",
    "https://i.pinimg.com/originals/c8/ea/ad/c8eaad52ac8b443748e153da94e677de.jpg",
    "https://i.pinimg.com/originals/ce/a6/90/cea6904b92ae15ca58d7bd868d2f845d.jpg",
    "https://i.pinimg.com/originals/ba/6b/f8/ba6bf8451d18a38ba4039eaa738e42d9.jpg",
  ],
  female: [
    "https://i.pinimg.com/originals/c9/1f/98/c91f98d278a568b7e66e5df15136d3f5.jpg",
    "https://i.pinimg.com/originals/b2/03/b7/b203b7b9a80a10a97c80e1b1990a21e9.png",
    "https://i.pinimg.com/originals/97/f0/cb/97f0cb0bd91313be32a74ff14584d0f7.jpg",
    "https://i.pinimg.com/originals/f4/a4/84/f4a48410adff9d5982419dc8158838f2.jpg",
    "https://i.pinimg.com/originals/e0/b4/de/e0b4deafeffe36e32eeb85e214b07a9e.jpg",
    "https://xsgames.co/randomusers/avatar.php?g=female",
  ],
};
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const avatarService = {
  getRandomAvatar(male: boolean) {
    if (male) {
      let index = getRandomInt(avatarLinkList.male.length);
      return avatarLinkList.male[index];
    } else {
      let index = getRandomInt(avatarLinkList.female.length);
      return avatarLinkList.female[index];
    }
  },
};
export default avatarService;
