/**
 * Created by jahansj on 12/04/2016.
 */
import { expect } from 'chai';
import { List, Map } from 'immutable';

/*
    Learning redux basics through test
    State is immutable, we form new states from our original and preserve it
 */

describe('immutability', () => {
    describe('a list', () => {

        function addMovie(currentState, movie){
            return currentState.set('movies', currentState.get('movies').push(movie));
        }

        it('is immutable', () => {

            let state = new Map({
                movies: List.of('movie1', 'movie2')
            });
            let nextState = addMovie(state, 'movie3');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'movie1',
                    'movie2',
                    'movie3'
                )}));

            expect(state).to.equal(Map({
                movies: List.of(
                    'movie1',
                    'movie2'
                )}));
        });
    });
});