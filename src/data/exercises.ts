import { Exercise } from '@/components/ExerciseCard';

export const exerciseDatabase: Record<string, Exercise[]> = {
  // Neck exercises
  neck: [
    {
      id: 'neck-stretch-1',
      name: 'Gentle Neck Stretches',
      description: 'Basic neck mobility exercises to relieve tension and improve range of motion.',
      duration: '5 min',
      difficulty: 'Easy',
      targetArea: 'Neck',
      youtubeId: '2N1Nh7M8kpY',
      instructions: [
        'Sit or stand with good posture, shoulders relaxed',
        'Slowly tilt your head to the left, bringing ear toward shoulder',
        'Hold for 5 seconds, feeling the stretch on the right side',
        'Return to center and repeat on the right side',
        'Perform 3 repetitions on each side'
      ],
      benefits: [
        'Reduces neck stiffness and tension',
        'Improves neck mobility',
        'Helps relieve headaches caused by neck tension'
      ]
    },
    {
      id: 'neck-rotation',
      name: 'Neck Rotation Exercise',
      description: 'Gentle rotation movements to increase neck flexibility and reduce pain.',
      duration: '4 min',
      difficulty: 'Easy',
      targetArea: 'Neck',
      youtubeId: 'wQylqaCl8Zo',
      instructions: [
        'Start in a neutral position looking straight ahead',
        'Slowly turn your head to either right or left according to selected position',
        'Return to center and repeat on the opposite side',
        'Do 10 repetitions on each side'
      ],
      benefits: [
        'Increases rotational range of motion',
        'Loosens tight neck muscles',
        'Improves posture awareness'
      ]
    }
  ],

  // Shoulder exercises
  left_shoulder: [
    {
      id: 'shoulder-pendulum',
      name: 'Pendulum Shoulder Exercise',
      description: 'Gentle swinging motion to improve shoulder mobility without strain.',
      duration: '5 min',
      difficulty: 'Easy',
      targetArea: 'Shoulder',
      youtubeId: 'E4KVt0bfpuk',
      instructions: [
        'Lean forward with one hand on a table for support',
        'Let your affected arm hang down loosely',
        'Gently swing your arm in small circles',
        'Gradually increase circle size as comfort allows',
        'Perform for 1-2 minutes, then reverse direction'
      ],
      benefits: [
        'Reduces shoulder stiffness',
        'Promotes blood flow to the joint',
        'Gentle enough for early rehabilitation'
      ]
    },
    {
      id: 'shoulder-stretch',
      name: 'Cross-Body Shoulder Stretch',
      description: 'Effective stretch for the posterior shoulder muscles.',
      duration: '4 min',
      difficulty: 'Easy',
      targetArea: 'Shoulder',
      youtubeId: 'Hf9XCH4RwIk',
      instructions: [
        'Stand or sit with good posture',
        'Bring your left arm across your body',
        'Use your right hand to gently pull the left arm closer',
        'Do for at least 15 Reps',
        'Repeat 3 times on each side'
      ],
      benefits: [
        'Stretches posterior shoulder muscles',
        'Improves shoulder flexibility',
        'Helps with rounded shoulder posture'
      ]
    }
  ],
  right_shoulder: [
    {
      id: 'shoulder-pendulum',
      name: 'Pendulum Shoulder Exercise',
      description: 'Gentle swinging motion to improve shoulder mobility without strain.',
      duration: '5 min',
      difficulty: 'Easy',
      targetArea: 'Shoulder',
      youtubeId: 'E4KVt0bfpuk',
      instructions: [
        'Lean forward with one hand on a table for support',
        'Let your affected arm hang down loosely',
        'Gently swing your arm in small circles',
        'Gradually increase circle size as comfort allows',
        'Perform for 1-2 minutes, then reverse direction'
      ],
      benefits: [
        'Reduces shoulder stiffness',
        'Promotes blood flow to the joint',
        'Gentle enough for early rehabilitation'
      ]
    }
  ],

  // Knee exercises
  left_knee: [
    {
      id: 'knee-extension',
      name: 'Seated Knee Extension',
      description: 'Strengthening exercise for the muscles around the knee.',
      duration: '5 min',
      difficulty: 'Easy',
      targetArea: 'Knee',
      youtubeId: 'YWiyPRvz9-c',
      instructions: [
        'Sit in a chair with feet flat on the floor',
        'Slowly straighten one leg, raising foot',
        'Hold at the top for 3 seconds',
        'Lower slowly and repeat',
        'Do 10-15 reps on each leg'
      ],
      benefits: [
        'Strengthens quadriceps',
        'Supports knee stability',
        'Safe for most knee conditions'
      ]
    }
  ],
  right_knee: [
    {
      id: 'knee-extension',
      name: 'Seated Knee Extension',
      description: 'Strengthening exercise for the muscles around the knee.',
      duration: '5 min',
      difficulty: 'Easy',
      targetArea: 'Knee',
      youtubeId: 'YWiyPRvz9-c',
      instructions: [
        'Sit in a chair with feet flat on the floor',
        'Slowly straighten one leg, raising foot',
        'Hold at the top for 3 seconds',
        'Lower slowly and repeat',
        'Do 10-15 reps on each leg'
      ],
      benefits: [
        'Strengthens quadriceps',
        'Supports knee stability',
        'Safe for most knee conditions'
      ]
    }
  ],

  // Removed: buttocks and chest exercises (require floor/doorway - not detectable)
  buttocks: [],
  chest: [],

  // Default exercises for unmapped body parts
  default: [
    {
      id: 'general-stretch',
      name: 'Full Body Gentle Stretch',
      description: 'A comprehensive stretching routine suitable for general pain relief.',
      duration: '10 min',
      difficulty: 'Easy',
      targetArea: 'Full Body',
      youtubeId: 'sTANio_2E0Q',
      instructions: [
        'Start with deep breathing to relax',
        'Gently stretch your neck in all directions',
        'Roll your shoulders forward and backward',
        'Stretch your arms overhead',
        'Finish with gentle hip circles'
      ],
      benefits: [
        'Improves overall flexibility',
        'Reduces muscle tension',
        'Promotes relaxation'
      ]
    }
  ]
};

export const getExercisesForBodyPart = (bodyPartId: string): Exercise[] => {
  // Try exact match first
  if (exerciseDatabase[bodyPartId]) {
    return exerciseDatabase[bodyPartId];
  }

  // Try partial matches
  const partialMatches: Record<string, string> = {
    'head': 'neck',
    'back_head': 'neck',
    'back_neck': 'neck',
    'left_back_shoulder': 'left_shoulder',
    'right_back_shoulder': 'right_shoulder',
    'abdominal': 'spine',
    'groin': 'buttocks',
    'left_thigh': 'left_knee',
    'right_thigh': 'right_knee',
    'left_hamstring': 'left_knee',
    'right_hamstring': 'right_knee',
    'left_calf': 'left_knee',
    'right_calf': 'right_knee',
    'left_shin': 'left_knee',
    'right_shin': 'right_knee',
  };

  const mappedPart = partialMatches[bodyPartId];
  if (mappedPart && exerciseDatabase[mappedPart]) {
    return exerciseDatabase[mappedPart];
  }

  // Return default exercises
  return exerciseDatabase.default;
};

// Get all unique available exercises (filtering out empty categories)
export const getAllAvailableExercises = (): Exercise[] => {
  const allExercises: Exercise[] = [];
  const seenIds = new Set<string>();

  for (const category in exerciseDatabase) {
    if (category === 'default') continue; // Skip default

    const exercises = exerciseDatabase[category];
    for (const exercise of exercises) {
      if (!seenIds.has(exercise.id)) {
        seenIds.add(exercise.id);
        allExercises.push(exercise);
      }
    }
  }

  return allExercises;
};
