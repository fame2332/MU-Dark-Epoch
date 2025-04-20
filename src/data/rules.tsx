import React from 'react';
import { Rule } from '../types/types';

export const rules: Rule[] = [
  {
    id: 1,
    title: 'Outbidding',
    description: 'Outbidding = Auto Kick. If you outbid someone, it will result in an immediate kick from the guild. Play fair, and respect everyone\'s time and effort.'
  },
  {
    id: 2,
    title: 'Bidding Etiquette',
    description: 'Always wait for confirmation before placing your bid in any auction or loot session. This helps keep the process organized and smooth.'
  },
  {
    id: 3,
    title: 'Crystal of Chaos (COC)',
    description: 'A list will be provided to all members for fair distribution. Check the list and claim your share accordingly.'
  },
  {
    id: 4,
    title: 'Epic Loots',
    description: (
      <>
        <p>If you want an Epic Loot, simply say "Mine!" when it's up for grabs.</p>
        <p>If multiple members want it, we'll use a duck race/roulette to decide the winner. Fair and square!</p>
      </>
    )
  },
  {
    id: 5,
    title: 'Advancement Materials',
    description: (
      <>
        <p>Feather of Condor (FOC), Jewel of Creation (JOC), Flame of Condor (FC), and other advancement materials:</p>
        <p>• Similar to Epic Loots, say "Mine!" if you're interested.</p>
        <p>• For these expensive items, we'll use the duck race/roulette system if there's more than one interested party.</p>
      </>
    )
  },
  {
    id: 6,
    title: 'Archangel (AA) Equipment',
    description: 'These will be reserved for the top damager in battles or raids. Keep up the good work, and you\'ll be rewarded!'
  },
  {
    id: 7,
    title: 'Respectful Community',
    description: (
      <>
        As a guild, we encourage fun, camaraderie, and mutual respect. We celebrate our diverse community and strive for a positive, inclusive environment. Toxic behavior, including racism, will not be tolerated. Let's keep the atmosphere friendly and welcoming for all!
      </>
    )
  },
  {
    id: 8,
    title: 'Inactivity',
    description: (
      <>
        With 2 days of Inactivity = Kick.
      </>
    )
  }
];
