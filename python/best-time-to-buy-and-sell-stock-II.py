class Solution:
    def maxProfit(self, prices:'List[int]') -> int:
        gains = [prices[i] - prices[i-1] for i in range(1,len(prices))
                if prices[i] - prices[i-1] > 0]
        return sum(gains)
print(Solution().maxProfit([3,5,2,55,6,3,22,4,5,66,3,2,1,5,6,29]))