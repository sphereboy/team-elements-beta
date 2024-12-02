import { TeamMember } from '@/types/team'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface MemberCardProps {
  member: TeamMember
  onClick: () => void
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`group hover:border-primary transition-all cursor-pointer ${member.color}`}
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="aspect-square flex flex-col items-center justify-center text-center space-y-2">
            <div className="text-2xl font-bold font-mono">{member.element.symbol}</div>
            <div className="text-xs font-mono absolute top-2 right-2">{member.element.atomicNumber}</div>
            <div className="text-sm font-medium">{member.name}</div>
            <div className="text-xs text-muted-foreground">{member.role}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

