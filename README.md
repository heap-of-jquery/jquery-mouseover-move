# jQuery Mouseover Move

jQuery Mouseover Move is a jQuery plugin which allows you to have elements which move out of the way upon mouseover. This is useful for displaying "heads up" type information without having the display element blocking or interfering with interaction with the rest of the website. It is similar to how Google's Chrome shows the URL upon mouseover a link.

## Instructions

1. Call jQuery("#element").mouseoverMove(options).
2. You're done. All options are optional.
3. At any point in time, call jQuery("#element").mouseoverMove("freeze") or jQuery("#element").mouseoverMove("unfreeze") to stop/start the transition.
4. At any point in time, call jQuery("#element").mouseoverMove("move") to force transition.

## Options

```javascript
{
	side: '50px', // determines how far from the left/right the element sits.
	bottom: '50px',
	start: 'right', // or left, nothing else, determines which side of the screen it starts on
	speed: 100 // determines how fast the animation runs
}
```

## Screenshots

![Example](http://gifninja.com/Workspace/2b83d6a3-7115-4bc9-b02f-2373c0f4d4e5/141.jpg)

## Known Issues

* General lack of flexibility, it always locks to the bottom left/right at this point. It would be nice to be able to specify positioning more flexibly.
* It would be nice to have other "run away" options.
* Delayed mouse move. 

## License 

Please retain this notice in ALL redistributions as well as a link back to the original repository.

Copyright 2013 Giuseppe Burtini      https://github.com/gburtini

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this library except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
