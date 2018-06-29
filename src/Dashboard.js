import React from 'react'
import Pet from './components/Pet'
import { fetchCat, fetchDog, deleteCat, deleteDog } from './actions'
import { connect } from 'react-redux'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  onAdoptPet = species => {
    if (species === 'cat') {
      this.dispatch(deleteCat())
    } else {
      this.dispatch(deleteDog())
    }
  }

  render() {
    return (
      <main>
        {this.props.cat.data ? (
          <Pet
            pet={this.props.catToAdopt}
            species="cat"
            onAdoptPet={this.onAdoptPet}
          />
        ) : null}

        {this.props.dog.data ? (
          <Pet
            pet={this.props.dogToAdopt}
            species="dog"
            onAdoptPet={this.onAdoptPet}
          />
        ) : null}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  dogToAdopt: state.dog,
  catToAdopt: state.cat
})

export default connect(mapStateToProps)(Dashboard)
