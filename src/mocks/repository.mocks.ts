import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';

const repositoryList: Repository[] = [
    {  
    name: 'Ionic 3 Camera',
    description: 'This repository show the usage of the Camera functionality within IONIC 3. ',
    owner: USER_LIST[0]
}, 
{  
    name: 'Ionic 3 sms',
    description: 'This repository show the usage of the sms functionality within IONIC 3. ',
    owner: USER_LIST[0]
},
 {  
    name: 'Ionic 3 Geolocation',
    description: 'This repository show the usage of the Geolocation functionality within IONIC 3. ',
    owner: USER_LIST[1]
},
 {  
    name: 'Ionic 3 Vibration',
    description: 'This repository show the usage of the Vibration functionality within IONIC 3. ',
    owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;
  
