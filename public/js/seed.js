window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id:1,
      title: 'Yellow Paul', 
      description: 'On-demand sand castle construction expertise.',
      url:'#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/scarlettjohansson.jpg',
    },
    {
      id:2,
      title: 'Supermajority: The Fantasy Congress League', 
      description: 'Earn points when your favourite politicians pass legislation.',
      url:'#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/sc.jpg',
    },
    {
      id:3,
      title: 'Tinfoild: Tailored tinfoil hats', 
      description: 'We already have your measurements and shipping address.',
      url:'#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/sc2.jpg',
    },
    {
      id:4,
      title: 'Haught or Naught', 
      description: 'High-minded or absent-minded? You decide.',
      url:'#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/sc3.jpg',
    },
  ];

  return {products: products};
})();