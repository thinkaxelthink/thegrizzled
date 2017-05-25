export default {
  name: 'GameBoard',
  methods: {
    fuckoff() {
      console.log('do a thing', this.shuffleAll)
    }
  },
  render(h) {
    return (<div onClick={this.fuckoff}>akadjfklajsfa</div>)
  }
};
