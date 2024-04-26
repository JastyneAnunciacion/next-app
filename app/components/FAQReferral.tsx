import React from 'react'
import ListContainterWithTitleHeader from './ListContainterWithTitleHeader'
import DropdownListItem from './DropdownListItem'

const FAQReferral = () => {
  return (
    <div>
      <ListContainterWithTitleHeader title='Frequently Asked Questions' imgSrc='/images/pencil-circle-fill.256x256.png'>
        <DropdownListItem title='What is the @PHX-Gamble Refer-a-Friend program?' arrowIsRightSide={true}>
          Earn BTC by inviting friends to @PHX-Gamble
        </DropdownListItem>
        <DropdownListItem title='How can I obtain my referral link?' arrowIsRightSide={true}>
          Access your referral link by clicking the "EARN" button in our bot and share it with friends.
        </DropdownListItem>
        <DropdownListItem title='Who counts as a valid referral?' arrowIsRightSide={true}>
          <p className='font-semibold'>A valid referral is someone who:</p>
          <div className='px-1'>
            <p>- Uses your referral link.</p>
            <p>- Is new to @Whale with fresh wallets and Telegram accounts.</p>
            <p>- Connects their Telegram to our bot/whale.io.</p>
            <p>- Participates in any @PHX-Gamble games.</p>
          </div>
        </DropdownListItem>
        <DropdownListItem title='What are my earnings per referral?' arrowIsRightSide={true}>
          Earn 10% of the house edge from direct referrals, 1% from tier 2 referrals. With an average house edge of 4-5% at @PHX-Gamble, you earn a portion of the profits from your referrals wagers.
        </DropdownListItem>
        <DropdownListItem title='What are Tier 2 referrals?' arrowIsRightSide={true}>
          You earn 1% from every referral that your direct referrals make.
        </DropdownListItem>
        <DropdownListItem title='How are my earnings paid out?' arrowIsRightSide={true}>
          Claim your earnings whenever you want from @PHX-Gamble Earn page!
        </DropdownListItem>
        <DropdownListItem title='Is there a referral limit?' arrowIsRightSide={true}>
          No limit on referrals. Your earnings are based on your referrals gaming activity.
        </DropdownListItem>
        <DropdownListItem title='How does house edge work?' arrowIsRightSide={true}>
          House edge is the casino's profit margin. For example, a 5% house edge on slots means the casino keeps 5 TON for every 100 TON wagered. And you would receive 10% of that house edge from every referral.
        </DropdownListItem>
        <DropdownListItem title='Need more info?' arrowIsRightSide={true}>
          Please see our T&Cs or contact @examplebot.
        </DropdownListItem>
      </ListContainterWithTitleHeader>
    </div>
  )
}

export default FAQReferral