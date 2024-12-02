import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TeamMember } from '@/types/team'

interface MemberDetailProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function MemberDetail({ member, isOpen, onClose }: MemberDetailProps) {
  if (!member) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Team Member Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={`/placeholder.svg?height=80&width=80`} />
              <AvatarFallback>{member.element.symbol}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Element Information</h3>
            <div className={`p-4 rounded-lg ${member.color}`}>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-mono font-bold">{member.element.symbol}</div>
                <div className="text-sm font-mono">{member.element.atomicNumber}</div>
              </div>
              <div className="text-sm text-muted-foreground mt-2">{member.department}</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {member.strengths.map((strength) => (
                <Badge key={strength} variant="secondary">
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

