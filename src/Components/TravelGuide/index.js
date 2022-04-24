import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import Place from '../Place'

class TravelGuide extends Component {
  state = {
    places: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPlacesList()
  }

  getPlacesList = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data.packages)
    const modifiedData = data.packages.map(eachPlace => ({
      id: eachPlace.id,
      name: eachPlace.name,
      imageUrl: eachPlace.image_url,
      description: eachPlace.description,
    }))

    console.log(modifiedData)

    this.setState({places: modifiedData, isLoading: false})
  }

  render() {
    // console.log('Iam rendered')
    const {places, isLoading} = this.state

    console.log(places, isLoading)

    return (
      <div className="main-container">
        <div>
          <h1 className="heading">Travel Guide</h1>
        </div>
        <div className="list-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="places-list">
              {places.map(eachPlace => (
                <Place details={eachPlace} key={eachPlace.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
