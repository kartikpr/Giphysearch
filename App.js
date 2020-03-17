/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import GiphySearch from './GiphySearch'; // component for searching for gifs
import searchGifs from './searchGifs';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  state = {
      text : '',
      query: '',
      gif_url: '',
    };

setGifUrl(url){
  console.log('url' , url)
this.setState({gif_url : url})
console.log(this.state.gif_url)
}

  setQueryAndSearch(query){
    console.log('query' , query)

    console.log('querystate' , this.state.query)
    this.setState({ query });

    this.searchGifs(query);
    }
  searchGifs = async (query) => {

      const search_results = await searchGifs(query);
      this.setState({
        search_results
      });
      console.log('search')
    }




  render(){
    const {
        messages,
        text,
        is_gif_modal_visible,
        is_emoji_modal_visible,
        query,
        search_results
      } = this.state;
    return (

      <GiphySearch
              query={query}
              onSearch={(query) => this.setQueryAndSearch(query)}
              search={() => this.searchGifs(this.state.query)}
              search_results = {search_results}
              onPick={(gif_url) => this.setGifUrl(gif_url)} />

    )
  }

}

const styles = StyleSheet.create({

});

export default App;
