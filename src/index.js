function getComponent() {
	return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
		const element = document.createElement('div')
		element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ')
		return element
	})
}

getComponent().then((element) => {
	document.body.appendChild(element)
})
