// C++ code for the above approach:
#include <bits/stdc++.h>
using namespace std;

// Define the function to find the maximum
// length of subsequence with equal numbers
int MaximizeEqualNumber(int n, int k, int a[])
{

	// Initialize the maximum count seen
	// so far to 1
	int maxCount = 1;

	// Loop over all indices in the array
	for (int i = 1; i <= n; i++) {

		// Loop over all possible
		// values of x
		for (int x = -k; x <= k; x++) {

			// Compute the target value
			// based on the current
			// index and x
			int target = a[i] + x;

			// Initialize the count for
			// the current target value
			// to 1
			int count = 1;

			// Loop over all remaining
			// indices in the array
			for (int j = i + 1; j <= n; j++) {

				// Check if the current
				// value can be transformed
				// to the target value using
				// the given operation
				if (abs(a[j] - target) <= k - x) {

					// Increment the count
					// for the current
					// target value
					count++;
				}
			}

			// Check if the count for the
			// current target value is
			// greater than the maximum
			// count seen so far
			if (count > maxCount) {

				// Update the maximum
				// count if necessary
				maxCount = count;
			}
		}
	}

	// Return the maximum count
	// seen for any target value
	return maxCount;
}

// Driver code
int main()
{
	int n = 4;
	int K = 1;
	int t;
    cin>>t;
    int a[n];
    for(int i=0;i<n;++i){
        cin>>a[i];
    }
    while(t--){
int result = MaximizeEqualNumber(n, K, a);

	// Print the result
	cout << "Maximum length of subsequence with equal "
			"numbers: "
		<< result << endl;
    }
	// Call the function to find the
	// maximum length of subsequence
	// with equal numbers
	
	return 0;
}
