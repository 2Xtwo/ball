import { SkillRating } from '../../types/proPlayer';

interface RatingCardProps {
  overallRating: number;
  skillRatings: SkillRating[];
}

export default function RatingCard({ overallRating, skillRatings }: RatingCardProps) {
  const getCardStyle = (rating: number) => {
    if (rating >= 80) {
      return 'from-yellow-400 via-yellow-300 to-yellow-200'; // Gold
    } else if (rating >= 60) {
      return 'from-gray-300 via-gray-200 to-gray-100'; // Silver
    }
    return 'from-amber-700 via-amber-600 to-amber-500'; // Bronze
  };

  const getStatBgColor = (rating: number) => {
    if (rating >= 80) {
      return 'bg-white/90'; // Gold card stats
    } else if (rating >= 60) {
      return 'bg-white/80'; // Silver card stats
    }
    return 'bg-white/70'; // Bronze card stats
  };

  // Group skills by category
  const technicalSkills = skillRatings.filter(skill => skill.category === 'technical');
  const physicalSkills = skillRatings.filter(skill => skill.category === 'physical');
  const mentalSkills = skillRatings.filter(skill => skill.category === 'mental');

  return (
    <div className={`bg-gradient-to-br ${getCardStyle(overallRating)} rounded-lg shadow-lg p-6`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Player Rating</h2>
          <p className="text-gray-700">FIFA-style rating card</p>
        </div>
        <div className="text-center">
          <div className={`rounded-full h-20 w-20 flex items-center justify-center ${getStatBgColor(overallRating)} border-2 border-white/30`}>
            <span className="text-4xl font-bold text-gray-900">{overallRating}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Technical</h3>
          {technicalSkills.map((skill) => (
            <div key={skill.skill} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                <span className={`text-sm font-bold ${getStatBgColor(skill.rating)} px-2 py-0.5 rounded-full text-gray-900`}>
                  {skill.rating}
                </span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${getStatBgColor(skill.rating)}`}
                  style={{ width: `${skill.rating}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Physical Skills */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Physical</h3>
          {physicalSkills.map((skill) => (
            <div key={skill.skill} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                <span className={`text-sm font-bold ${getStatBgColor(skill.rating)} px-2 py-0.5 rounded-full text-gray-900`}>
                  {skill.rating}
                </span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${getStatBgColor(skill.rating)}`}
                  style={{ width: `${skill.rating}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mental Skills */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 mb-2">Mental</h3>
          {mentalSkills.map((skill) => (
            <div key={skill.skill} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                <span className={`text-sm font-bold ${getStatBgColor(skill.rating)} px-2 py-0.5 rounded-full text-gray-900`}>
                  {skill.rating}
                </span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${getStatBgColor(skill.rating)}`}
                  style={{ width: `${skill.rating}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}